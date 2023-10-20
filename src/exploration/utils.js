export function stringifyWithCircular(obj, depth = 3) {
    const seen = new WeakSet();
    return JSON.stringify(
        obj,
        function (key, value) {
            if (depth > 0) {
                if (typeof value === 'function') {
                    try {
                        value = value.toString();
                    } catch (e) {
                        console.log('error', e);
                    }
                }

                if (typeof value === 'object' && value !== null) {
                    if (seen.has(value)) {
                        return '[Circular Reference]';
                    }
                    seen.add(value);
                }
            }
            return value;
        },
        2
    );
}
