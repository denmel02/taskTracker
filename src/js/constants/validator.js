export const EMAIL_REGEXP = /^[a-zA-Z0-9+._%-]{1,256}@[a-zA-Z0-9][a-zA-Z0-9-]{0,64}(?:\.[a-zA-Z0-9][a-zA-Z0-9-]{0,25})+$/;

// MARK: Minimum six characters, at least one letter and one number

export const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
