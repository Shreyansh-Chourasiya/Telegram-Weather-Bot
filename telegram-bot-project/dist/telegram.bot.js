"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramBot = void 0;
const common_1 = require("@nestjs/common");
const telegraf_1 = require("telegraf");
let TelegramBot = class TelegramBot {
    constructor() {
        this.bot = new telegraf_1.Telegraf(process.env.TELEGRAM_BOT_TOKEN);
        this.setupCommands();
    }
    setupCommands() {
        this.bot.start((ctx) => ctx.reply('Welcome to the Weather Bot!'));
        this.bot.on('message', (ctx) => {
            ctx.reply('Sorry, I can only respond to commands.');
        });
    }
    startPolling() {
        this.bot.launch();
    }
};
TelegramBot = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TelegramBot);
exports.TelegramBot = TelegramBot;
//# sourceMappingURL=telegram.bot.js.map