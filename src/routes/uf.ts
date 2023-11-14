import { Router, Request, Response } from "express";
import { ibge, sigla } from "../controllers/UfController";

const routes = Router();


routes.get("/sigla/:sigla", sigla);
routes.get("/ibge/:ibge", ibge);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );


export default routes;
