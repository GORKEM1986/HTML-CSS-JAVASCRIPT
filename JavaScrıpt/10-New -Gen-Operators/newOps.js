//* ======================================================
//*  DESTRUCTURING (OBJECT)
//* ======================================================
console.log("****** NEW OPERATORS *******")

const car = {
    name: "BMW",
    model: 1990,
    engine: 1.6,
    colors: ["blue", "purple"],
  }

  //* 1-YONTEM (Classical)

  const name1 = car.name
  const model1 = car["model"]
  console.log(name1);

  //* 2.YONTEM (Destructuring)

  const {name, model,colors} = car //? destructure
  console.log(name,model);

  const{ engine: motor } = car 

  console.log(motor);
  motor = 2.2
  console.log(motor, car);