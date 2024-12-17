#!/usr/bin/env node

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "dice-server",
    version: "0.1.0",
  },
  {
    capabilities: {
      resources: {},
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "roll_dice",
        description: "Roll a dice",
        inputSchema: {
          type: "object",
          properties: {
            sides: {
              type: "number",
              description: "Number of sides on the dice",
              default: 6,
            },
          },
        },
      },
    ],
  };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "roll_dice") {
    throw new Error("Unknown tool");
  }

  const sides = request.params.arguments?.sides || 6;
  if (typeof sides !== 'number' || sides < 1) {
      throw new Error("Invalid number of sides");
  }

  const result = Math.floor(Math.random() * sides) + 1;

  return {
    content: [
      {
        type: "text",
        text: String(result),
      },
    ],
  };
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error('Dice MCP server running on stdio');
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});
