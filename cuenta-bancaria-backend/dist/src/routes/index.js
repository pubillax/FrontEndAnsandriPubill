"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaBancariaRouter = void 0;
const express_1 = __importDefault(require("express"));
const cuentaBancaria_1 = require("../controllers/cuentaBancaria");
exports.cuentaBancariaRouter = express_1.default.Router();
exports.default = (app) => {
    app.use('/cuentaBancaria', exports.cuentaBancariaRouter);
};
exports.cuentaBancariaRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurantes = yield cuentaBancaria_1.cuentaBancariaController.list(req, res);
}));
function parseBool(value) {
    return value.toLowerCase() === 'true';
}
exports.cuentaBancariaRouter.post('/create/nombre/:nombre/saldo/:saldo/activo/:activo', (req, res) => {
    cuentaBancaria_1.cuentaBancariaController.create(req.params.nombre, parseInt(req.params.saldo), parseBool(req.params.activo));
    res.send(req.params.nombre + ", " + req.params.fecha + ", " + req.params.capacidad);
});
exports.cuentaBancariaRouter.get('/find/nombre/:nombre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const restaurante = yield cuentaBancaria_1.cuentaBancariaController.find(req, res);
}));
exports.cuentaBancariaRouter.delete('/delete/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield cuentaBancaria_1.cuentaBancariaController.delete(req, res);
}));
exports.cuentaBancariaRouter.put('/update/id/:id/nombre/:nombre/saldo/:saldo/activo/:activo', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield cuentaBancaria_1.cuentaBancariaController.update(req, res);
}));
/* module.exports = (app) => {
    app.post('/restaurante/create/nombre/:nombre/fecha/:fecha/capacidad/:capacidad',
        restauranteController.create);
    app.get('/restaurante/list', restauranteController.list);
    app.get('/restaurante/find/nombre/:nombre', restauranteController.find);
    app.delete('/restaurante/delete/nombre/:nombre', restauranteController.delete);
    app.put('/restaurante/update/nombre/:nombre', restauranteController.update)
}; */ 
