import { FastifyReply, FastifyRequest } from "fastify";
import * as service from "../services/store";
import { success, error } from "../utils/response";

//create store
export const createStore = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.createStore(req.body as any);
    reply.code(201).send(success("Store created successfully", result));
  } catch (err: any) {
    reply.code(400).send(error("Failed to create store", err.message));
  }
};

//get all stores
export const listStores = async (_req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.getStores();
    reply.send(success("Stores fetched", result));
  } catch (err: any) {
    reply.code(500).send(error("Failed to fetch stores", err.message));
  }
};

//get store by id
export const getStore = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id = Number((req.params as any).id);
    const result = await service.getStoreById(id);
    if (!result) return reply.code(404).send(error("Store not found"));
    reply.send(success("Store fetched", result));
  } catch (err: any) {
    reply.code(400).send(error("Failed to fetch store", err.message));
  }
};
