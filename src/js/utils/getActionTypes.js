export default (type) => ({
    request: type,
    success: `${type}_SUCCESS`,
    error: `${type}_ERROR`
});
