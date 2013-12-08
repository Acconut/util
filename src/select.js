(function(window) {
    
    /**
     * You can change this to any valid character you want.
     * This way it's possible to avoid problems with other librarys.
     * Of course, you need to change your code too!
     */
    var symbol = "$";
    
    /**
     * Returns one or multiple elements matching the selector inside the scope (document or this)
     * 
     * @param {String} selector A valid CSS selector (e.g. #id, .class, tag, p:nth-child(1))
     * @param {Boolean} returnArr If true the output is an array. This way you can get multiple results
     * @return {Element|Array} The element itself or an array containg elements matching the selector
     */
    window[symbol] = Element.prototype[symbol] = function(selector, returnArr) {
        var inEl = this instanceof Element,
            scope = inEl ? this : window.document;
        if(/^(\.|#)?[A-Za-z0-9\-_]*$/.test(selector) && !inEl && "getElementsByClassName" in document) {
            var result = [];
            if(selector.charAt(0) === "#") {
                result = [document.getElementById(selector.substr(1))];
            } else if(selector.charAt(0) === ".") {
                result = document.getElementsByClassName(selector.substr(1));
            } else {
                result = document.getElementsByTagName(selector);
            }
            return returnArr ? result : (result[0] || null);
        } else {
            // You can only use querySelector with an id if you call it using document
            if(/^#[A-za-z0-9\-_]+$/.test(selector)) {
                var result = document.getElementById(selector.substr(1));
                return returnArr ? [result] : result;
            }
            return scope["querySelector" + (returnArr ? "All" : "")](selector);
        }
    };
    
})(window);