interface UserText {
    operate() : string
    styleDesciption() : string
}

class InputText implements UserText {
    text: string

    constructor ( text : string ){
        this.text = text
    }

    public operate() : string {
        return this.text
    }

    public styleDesciption() : string {
        return " "
    }
}

class TextDecorator implements UserText {
    TextStyle : UserText

    constructor ( TextStyle : UserText ) {
        this.TextStyle = TextStyle
    }

    public operate() : string {
        return this.TextStyle.operate()
    }

    public styleDesciption() : string {
        return "Unknown Text Style"
    }
}
class BoldDecorator extends TextDecorator {
    name : string = "Bold"

    public operate() : string {
        return super.operate().bold()
    }

    public styleDesciption() : string {
        return this.name
    }
}

class ItalicsDecorator extends TextDecorator {
    name : string = "Italics"
    
    public operate() : string {
        return super.operate().italics()
    }

    public styleDesciption() : string {
        return this.name
    }
}

class StrikeOutDecorator extends TextDecorator {
    name : string = "Strike Out"

    public operate() : string {
        return super.operate().strike()
    }

    public styleDesciption() : string {
        return this.name
    }
}

/*class BigDecorator extends TextDecorator {
    name : string = "Big Text"

    public operate() : string {
        return super.operate().big()
    }

    public styleDesciption() : string {
        return this.name
    }
}*/

/*class SmallDecorator extends TextDecorator {
    name : string = "Small Text"

    public operate() : string {
        return super.operate().small()
    }

    public styleDesciption() : string {
        return this.name
    }
}*/

/*class TextAsLink extends TextDecorator {
    name : string = "Link"

    public operate() : string {
        return super.operate().link("https://github.com/mmncit/dpatterna/pull/5")
    }

    public styleDesciption() : string {
        return this.name
    }
}*/

function showDecoration ( TextStyle : UserText ) {
    console.log( "Message in " + TextStyle.styleDesciption() + " : " + TextStyle.operate() )
}

const input = new InputText ( "Hello World" )
const boldDecorator = new BoldDecorator ( input )
const italicsDecorator = new ItalicsDecorator ( input )
const strikeOutDecorator = new StrikeOutDecorator ( input )
//const textAsLink = new TextAsLink ( input )
//const bigDecorator = new BigDecorator ( input )
//const smallDecorator = new SmallDecorator ( input )

showDecoration( boldDecorator )
showDecoration( italicsDecorator )
showDecoration( strikeOutDecorator )
//showDecoration( textAsLink )
//showDecoration( bigDecorator )
//showDecoration( smallDecorator )