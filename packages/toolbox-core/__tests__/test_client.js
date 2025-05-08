import { ToolboxClient } from "../build/toolbox_core/client.js";

const client = new ToolboxClient('https://some_base_url');

describe('getToolResponse', () => {
  test('Should return a specific value based on inputs', async () => {
    const response = await client.getToolResponse(3, 4);
    expect(response).toBe(11);
  });
});
