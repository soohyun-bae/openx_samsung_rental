import { getCurrentPageSource } from "./landingPage";

const buildBaseInquiryFormData = (values) => {
  const pageSource = getCurrentPageSource();

  return {
    name: values.name,
    phone: values.phone,
    privacyConsent: true,
    source: "2026-samsung-rental-landing",
    source_host: pageSource.host,
    source_url: pageSource.url,
    submitted_at: new Date().toISOString(),
  };
};

const appendRemainingFields = (source, target, usedNames) => {
  Object.entries(source).forEach(([key, value]) => {
    if (!usedNames.has(key)) {
      target[key] = value;
    }
  });
};

/** Builds form_data in the same field order configured in the admin dashboard. */
export const buildInquiryFormData = (values, fields = []) => {
  const baseFormData = buildBaseInquiryFormData(values);

  if (fields.length === 0) {
    return baseFormData;
  }

  const orderedFormData = {};
  const usedNames = new Set();

  fields.forEach((field) => {
    if (Object.prototype.hasOwnProperty.call(baseFormData, field.name)) {
      orderedFormData[field.name] = baseFormData[field.name];
      usedNames.add(field.name);
    }
  });

  appendRemainingFields(baseFormData, orderedFormData, usedNames);

  return orderedFormData;
};
