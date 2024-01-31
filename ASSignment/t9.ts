interface Configuration {
    readonly apiKey: string;
    readonly apiUrl: string;
    readonly maxRequestsPerMinute: number;
    readonly timeoutInSeconds: number;
  }
  
  // Example configuration object
  const defaultConfig: Configuration = {
    apiKey: "yourApiKey",
    apiUrl: "https://api.example.com",
    maxRequestsPerMinute: 100,
    timeoutInSeconds: 30,
  };
  
  // Function to update the configuration
  function updateConfiguration(
    currentConfig: Readonly<Configuration>,
    updatedConfig: Partial<Configuration>
  ): Configuration {
    return { ...currentConfig, ...updatedConfig };
  }
  
  // Example usage
  const updatedConfig: Configuration = updateConfiguration(defaultConfig, {
    maxRequestsPerMinute: 150,
    timeoutInSeconds: 45,
  });
  
  console.log(updatedConfig);
  