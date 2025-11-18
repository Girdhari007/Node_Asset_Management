import { FastifyReply, FastifyRequest } from "fastify";
import * as service from "../services/assignAssets";
import { success, error } from "../utils/response";

//create AssignAsset method 
export const assignAsset = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.assignAsset(req.body as any);
    reply.send(success("Asset assigned successfully", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to assign asset", err.message));
  }
};

// get all Assigned Assets
export const getAllAssetsAssigned = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const result = await service.getAllAssetsAssigned();
    reply.send(success("All assigned assets fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch assigned assets", err.message));
  }
};

//get assets for an Employee
export const getEmployeeAssets = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const id = Number((req.params as any).id);
    const result = await service.getEmployeeAssets(id);
    reply.send(success("Employee assets fetched", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to fetch employee assets", err.message));
  }
};

//return asset
export const returnAsset = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const { asset_id } = req.body as any;
    const result = await service.returnAsset(asset_id);
    reply.send(success("Asset returned successfully", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to return asset", err.message));
  }
};

//reAssign asset
export const reAssignAsset = async (req: FastifyRequest, reply: FastifyReply) => {
  try {
    const body = req.body as any;
    const result = await service.reAssignAsset(body);
    reply.send(success("Asset reassigned successfully", result));
  } catch (err: any) {
    reply.status(400).send(error("Failed to reassign asset", err.message));
  }
};
