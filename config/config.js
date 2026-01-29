/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
    address: "localhost",	// Address to listen on, can be:
    // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
    // - another specific IPv4/6 to listen on a specific interface
    // - "0.0.0.0", "::" to listen on any interface
    // Default, when address config is left out or empty, is "localhost"
    port: 8080,
    basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
    // you must set the sub path here. basePath must end with a /
    ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
    // or add a specific IPv4 of 192.168.1.5 :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
    // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
    // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

    useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
    httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
    httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

    language: "en",
    locale: "en-US",   // this variable is provided as a consistent location
    // it is currently only used by 3rd party modules. no MagicMirror code uses this value
    // as we have no usage, we  have no constraints on what this field holds
    // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

    logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
    timeFormat: 24,
    units: "metric",

    modules: [
        {
            module: "alert",
        },
        {
            module: "updatenotification",
            position: "top_bar"
        },
        {
            module: 'MMM-WatchDog',
        },
        {
            module: "MMM-ModuleScheduler",
            config: {
                global_schedule: [
                    {from: '0 20 * * *', to: '0 6 * * *', dimlevel: '10'},
                ],
            },
            disabled: true
        },
        {
            disabled: true,
            module: "MMM-Halloween",
            position: "fullscreen_above",
            config: {
                numberOfGhosts: 10,
                updateInterval: 1000 * 99999,
                minSize: 100,
                maxSize: 400,
                opacity: 0.35,
                staticGif: "assets/images/jack.gif",
                gifPosition: "bottom-left",
                gifSize: 150,
                minSpeed: 15,
                maxSpeed: 25
            }
        },
        {
            module: "MMM-MoonPhase",
            position: "top_left",
            classes: "scheduler",
            config: {
                module_schedule: [{
                    from: '0 20 * * *',
                    to: '59 23 * * *'
                }, // From 20:00 to 23:59 (same day)
                    {
                        from: '0 0 * * *',
                        to: '0 6 * * *'
                    } // From 00:00 to 06:00 (next day)
                ],
                basicColor: "white",
                title: false,
                size: 100,
                moonAlign: "top_left",
                textAlign: "top_left",
                alpha: 0.7,
                riseAndSet: {
                    display: false,
                    lon: -80,
                    lat: 40,
                    gmtOffset: -3
                }
            },
            order: "*",
            disabled: false
        },
        {
            module: "clock",
            position: "upper_third",
        },
        {
            module: "compliments",
            position: "lower_third"
        },
        {
            module: "weather",
            position: "top_right",
            header: "Current",
            config: {
                weatherProvider: "openmeteo",
                type: "current",
                lat: 47.4628,
                lon: 8.1858
            }
        },
        {
            module: "weather",
            position: "top_right",
            header: "Forecast",
            config: {
                weatherProvider: "openmeteo",
                type: "forecast",
                lat: 47.4628,
                lon: 8.1858,
                maxNumberOfDays: 5
            }
        },
        {
            module: "newsfeed",
            position: "bottom_bar",
            config: {
                feeds: [
                    {
                        title: "New York Times",
                        url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
                    }
                ],
                showSourceTitle: true,
                showPublishDate: true,
                broadcastNewsFeeds: true,
                broadcastNewsUpdates: true
            }
        },
    ]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {
    module.exports = config;
}
