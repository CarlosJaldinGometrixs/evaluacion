export const divisionSimple = (dividendo, divisor) => {
    if (divisor === 0) {
        throw new Error("No se puede dividir por 0");
    }
    return dividendo / divisor;
}