var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Example configuration object
var defaultConfig = {
    apiKey: "yourApiKey",
    apiUrl: "https://api.example.com",
    maxRequestsPerMinute: 100,
    timeoutInSeconds: 30,
};
// Function to update the configuration
function updateConfiguration(currentConfig, updatedConfig) {
    return __assign(__assign({}, currentConfig), updatedConfig);
}
// Example usage
var updatedConfig = updateConfiguration(defaultConfig, {
    maxRequestsPerMinute: 150,
    timeoutInSeconds: 45,
});
console.log(updatedConfig);
