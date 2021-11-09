import IApp from "./IApp";

/**
 * @class App
 * @description Eine kleine test-klasse, mit einem simplen counter-mechanismus zur veranschaulichung eines typescript projektes
 */
export default class App
{
    private counter : number; // in typescript müssen wir IMMER den datentyp angeben.
    private rootElement : HTMLElement | null; // manchmal ist es nötig ein "null" einzufügen, um sicherzugehen, das die applikation nicht crashed, wenn keine daten an die variable übergeben werden.

    /**
     * 
     * @param { number } counter der initialwert des counters
     * @param { string } root das element in dem die app lebt
     */
    constructor({ counter, root } : IApp) // wir importieren das Interface, um typescript zu sagen welche informationen der constructor benötigt, dies könnte AUCH direkt hier stehen, anstelle eines interfaces.
    {
        this.counter = counter;
        this.rootElement = document.getElementById(root || "app");
    }

    /**
     * @method create
     * @description erstellt das counter view element
     */
    create = () : void => // Eine methode/funktion die kein return hat ist vom typ "void"
    {
        const counterViewElement : HTMLElement | null = document.createElement('div');
        counterViewElement.id = "counterView"; // Ein getter/setter kann auch ohne datentyp behandelt werden.
        this.rootElement?.prepend(counterViewElement);

        this.update();
    }

    /**
     * @method update
     * @description macht ein update des counterView elements mit der aktuellen zahl.
     * @returns { boolean }
     */
    update = () : boolean => // Eine methode/funktion die einen return wert hat, muss immer den datentypen des returns angegeben haben
    {
        const counterViewElement : HTMLElement | null = document.getElementById("counterView");

        if(counterViewElement)
        {
            counterViewElement.innerText = this.counter.toString();

            return true;
        }

        return false;
    }

    /**
     * @method increment
     * @description inkementiert die counter zahl.
     */
    increment = () : void =>
    {
        this.counter++;

        console.log("counter incremented: " + this.update());
    }

    /**
     * @method decrement
     * @description dekrementiert die counter zahl.
     */
    decrement = () : void=>
    {
        this.counter--;

        console.log("counter decremented: " + this.update());
    }
}
