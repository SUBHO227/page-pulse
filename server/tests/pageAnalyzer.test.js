const { analyzePage } = require("../services/pageAnalyzer");
const axios = require("axios");

jest.mock("axios");

test("should analyze a valid HTML page", async () => {

    axios.get.mockResolvedValue({

        status: 200,

        headers: {
            "content-type": "text/html"
        },

        data: `
        <html>
            <head>
                <title>Example Domain</title>
                <meta name="description" content="Sample page">
            </head>

            <body>

                <h1>Hello</h1>

                <img src="a.jpg" alt="photo">

                <p>Hello World</p>

            </body>

        </html>
        `
    });

    const report = await analyzePage("https://example.com");

    expect(report.status).toBe(200);

    expect(report.title).toBe("Example Domain");

    expect(report.metaDescription).toBe("Sample page");

    expect(report.h1Count).toBe(1);

    expect(report.missingAltImages).toBe(0);

    expect(report.wordCount).toBe(3);
});


    test("should throw an error for an invalid URL", async () => {

    await expect(
        analyzePage("invalid-url")
    ).rejects.toThrow("Invalid URL");

});

test("should throw an error for a non-HTML page", async () => {

    axios.get.mockResolvedValue({

        status: 200,

        headers: {
            "content-type": "application/json"
        },

        data: '{"message":"Hello"}'

    });

    await expect(
        analyzePage("https://example.com/api")
    ).rejects.toThrow("URL does not contain an HTML page");

});

