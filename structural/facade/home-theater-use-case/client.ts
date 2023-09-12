import { Facade } from "./facade";

const facade = new Facade();
console.log('--TURN ON-----')
facade.watchMovie()
console.log('--TURN OFF-----')
facade.endMovie()