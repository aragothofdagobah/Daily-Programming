function foo() {
    var bar;
    quux = 'blah';
    function zip() {
        let quux = true;
        bar = true;
    }

    return zip;
}