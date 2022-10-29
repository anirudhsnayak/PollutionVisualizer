import fastify from "fastify";
import { getAirPollutionData, getOilSpills } from "./helpers";

const server = fastify();

server.route({
  method: "GET",
  url: "/air",
  schema: {
    // request needs to have a querystring with a `name` parameter
    querystring: {
      topLat: { type: "number" },
      leftLng: { type: "number" },
      bottomLat: { type: "number" },
      rightLng: { type: "number" },
      // format,
      limit: { type: "number" },
      // fields,
    },
  },
  handler: async (req: any, _) => {
    const data = await getAirPollutionData(
      req.query.topLat,
      req.query.leftLng,
      req.query.bottomLat,
      req.query.rightLng,
      "json",
      req.query.limit
    );
    return data;
  },
});

server.get("/oil", async (_, __) => {
  const data = await getOilSpills();
  return data;
});

server.listen({ port: 4000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
