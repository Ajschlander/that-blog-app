require("./dbInit");
const apiRoutes = require("../routes/apiRoutes");

describe("API - ROUTES", () => {
  let req = {};
  let res = {};
  beforeEach(() => {
    req = {};
    res = {};
  });
  it("should add a blog", async () => {
    req = {
      body: {
        title: "text",
        body: "description"
      }
    };

    res = {
      json: jest.fn()
    };

    await apiRoutes.postBlogifyApi(req, res);
    expect(res.json.mock.calls[0][0].title).toBe(req.body.title);
    expect(res.json.mock.calls[0][0].body).toBe(req.body.body);
  });
});
