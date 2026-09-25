import { createServerFn } from "@tanstack/react-start";

type DiagnosisLeadInput = {
    name: string;
    email: string;
    phone: string;
    companyName: string;
    segment: string;
    websiteOrInstagram: string;
    mainChallenge: string;
    pagePath: string;
    utmSource: string;
    utmMedium: string;
    utmCampaign: string;
    utmContent: string;
    utmTerm: string;
    honeypot: string;
};

function stringValue(value: unknown) {
    return typeof value === "string" ? value.trim() : "";
}

export const submitDiagnosisLead = createServerFn({ method: "POST" })
    .validator((data: DiagnosisLeadInput) => data)
    .handler(async ({ data }) => {
        const endpoint = process.env["CRM_SITE_LEADS_ENDPOINT"];
        const secret = process.env["CRM_SITE_LEADS_SECRET"];

        if (!endpoint || !secret) {
            return { ok: false, message: "Não foi possível enviar o diagnóstico agora." };
        }

        const payload = {
            name: stringValue(data.name),
            email: stringValue(data.email),
            phone: stringValue(data.phone),
            companyName: stringValue(data.companyName),
            segment: stringValue(data.segment),
            websiteOrInstagram: stringValue(data.websiteOrInstagram),
            mainChallenge: stringValue(data.mainChallenge),
            pagePath: stringValue(data.pagePath),
            utmSource: stringValue(data.utmSource),
            utmMedium: stringValue(data.utmMedium),
            utmCampaign: stringValue(data.utmCampaign),
            utmContent: stringValue(data.utmContent),
            utmTerm: stringValue(data.utmTerm),
            honeypot: stringValue(data.honeypot),
        };

        if (!payload.name || !payload.email || !payload.phone) {
            return { ok: false, message: "Preencha nome, e-mail e telefone para continuar." };
        }

        // Silently accept spam-bot submissions (honeypot filled) without forwarding to the CRM.
        if (payload.honeypot) {
            return { ok: true };
        }

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-Site-Lead-Secret": secret,
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                return { ok: false, message: "Não foi possível enviar o diagnóstico agora." };
            }

            const crmResponse = (await response.json().catch(() => ({}))) as { leadId?: string | null };
            const hasLeadId = Object.prototype.hasOwnProperty.call(crmResponse, "leadId");

            return { ok: true, ...(hasLeadId ? { leadId: crmResponse.leadId ?? null } : {}) };
        } catch {
            return { ok: false, message: "Não foi possível enviar o diagnóstico agora." };
        }
    });