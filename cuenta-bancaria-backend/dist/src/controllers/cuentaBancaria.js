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
Object.defineProperty(exports, "__esModule", { value: true });
exports.cuentaBancariaController = void 0;
const cuentaBancariaModel_1 = require("../../models/cuentaBancariaModel");
exports.cuentaBancariaController = {
    create(nombre, saldo, activo) {
        return __awaiter(this, void 0, void 0, function* () {
            const nuevaCuenta = yield cuentaBancariaModel_1.cuentaBancaria.create({
                nombre,
                saldo,
                activo,
            });
            return nuevaCuenta;
        });
    },
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nuevaCuenta = yield cuentaBancariaModel_1.cuentaBancaria.findAll();
                return res.status(200).send(nuevaCuenta);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
    find(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nombre } = req.params;
                const cuenta = yield cuentaBancariaModel_1.cuentaBancaria.findAll({
                    where: { nombre },
                });
                return res.status(200).send(cuenta);
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const deleted = yield cuentaBancariaModel_1.cuentaBancaria.destroy({
                    where: { id: parseInt(id, 10) },
                });
                if (deleted === 0) {
                    return res.status(404).send({ message: 'cuenta bancaria no encontrada' });
                }
                return res.status(200).send({ message: 'cuenta bancaria eliminada con éxito' });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, nombre, saldo, activo } = req.params;
                const [rowsUpdated, [updatedRestaurante]] = yield cuentaBancariaModel_1.cuentaBancaria.update({ nombre, saldo, activo }, {
                    where: { id },
                    returning: true,
                });
                if (rowsUpdated === 0 || !updatedRestaurante) {
                    return res.status(404).send({ message: 'Restaurante no encontrado' });
                }
                return res.status(200).send({
                    message: 'Restaurante actualizado con éxito',
                    restaurante: updatedRestaurante,
                });
            }
            catch (error) {
                return res.status(400).send(error);
            }
        });
    },
};
