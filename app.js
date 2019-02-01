var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Hero = /** @class */ (function () {
    function Hero(codenome, identidadeSecreta) {
        this.codenome = codenome;
        this.identidadeSecreta = identidadeSecreta;
    }
    //metodo (função)
    Hero.prototype.getIdentidade = function () {
        console.log("A identidade secreta do(a) " + this.codenome + " \u00E9 " + this.identidadeSecreta);
    };
    return Hero;
}());
var Batman = /** @class */ (function (_super) {
    __extends(Batman, _super);
    function Batman(arquiRival) {
        var _this = _super.call(this, "Batman", "Bruce Wayen") || this;
        _this.arquiRival = arquiRival;
        _this.superPoder = "Não possui";
        _this.pericia = "artes marciais,armas,tecnologia,investigação";
        _this.poder = 50;
        return _this;
    }
    return Batman;
}(Hero));
//let darkKinight = new Heroes();
//darkKinight.getIdentidade();
