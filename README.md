# IOpipe payload

![https://circleci.com/gh/iopipe/iopipe-payload](https://circleci.com/gh/iopipe/iopipe-payload.svg?style=svg)

Constructs and validates payloads for sending to the IOpipe event
ingestion API. Used by the [iopipe module](https://github.com/iopipe/iopipe).

## NodeJS: Install via NPM:

```
npm install -S iopipe-payload
```

Import & use:

```
var iopipe-payload = require('iopipe-payload')
var data = {}
iopipe-payload.normalize(data)
```

## Python: Install via PyPi:

```
pip install iopipe-payload
```

Import & use:

```
import iopipe_payload
data = {}
iopipe_payload.normalize(data)
```

## License

Apache 2.0
