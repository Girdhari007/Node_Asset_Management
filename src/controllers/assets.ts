import { FastifyReply, FastifyRequest } from "fastify";
import * as service from "../services/assets";
import { success, error } from "../utils/response";

//create asset
export const createAsset = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.createAsset(req.body as any);
    reply.code(201).send(success("Asset created successfully", result));
  } catch (err: any) {
    reply.code(400).send(error("Failed to create asset", err.message));
  }
};

//get all assets
export const getAllAssets = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const status = (req.query as any).status;
    const result = await service.getAllAssets(status);
    reply.send(success("All assets fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch assets", err.message));
  }
};

//get asset by id
export const getAssetById = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id = Number((req.params as any).id);
    const result = await service.getAssetById(id);
    reply.send(success("Asset fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch asset", err.message));
  }
};