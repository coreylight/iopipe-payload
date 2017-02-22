module.exports = {
    "environment": {
        "agent": {
            "runtime": "nodejs",
            "version": "0.2.0",
            "load_time": 1487795111258
        },
        "host": {
            "vm_id": "330dee9b-c2ea-4fbc-832f-3601e48c671c"
        },
        "os": {
            "hostname": "ip-10-31-61-50",
            "uptime": 4802,
            "totalmem": 3950452736,
            "freemem": 2783178752,
            "usedmem": 1167273984,
            "cpus": [
                {
                    "model": "Intel(R) Xeon(R) CPU E5-2666 v3 @ 2.90GHz",
                    "speed": 2900,
                    "times": {
                        "user": 102700,
                        "nice": 13700,
                        "sys": 74500,
                        "idle": 47534500,
                        "irq": 0
                    }
                },
                {
                    "model": "Intel(R) Xeon(R) CPU E5-2666 v3 @ 2.90GHz",
                    "speed": 2900,
                    "times": {
                        "user": 170900,
                        "nice": 13000,
                        "sys": 84600,
                        "idle": 47483700,
                        "irq": 0
                    }
                }
            ],
            "arch": "x64",
            "linux": {
                "pid": {
                    "self": {
                        "stat_start": {
                            "utime": "20",
                            "stime": "3",
                            "cutime": "0",
                            "cstime": "0",
                            "rss": "9128"
                        },
                        "stat": {
                            "utime": "20",
                            "stime": "3",
                            "cutime": "0",
                            "cstime": "0",
                            "rss": "9128"
                        },
                        "status": {
                            "FDSize": 128,
                            "Threads": 9,
                            "VmRSS": 36512
                        }
                    }
                }
            }
        },
        "nodejs": {
            "title": "/usr/local/lib64/node-v4.3.x/bin/node",
            "version": "v4.3.2",
            "versions": {
                "http_parser": "2.5.2",
                "node": "4.3.2",
                "v8": "4.5.103.35",
                "uv": "1.8.0",
                "zlib": "1.2.8",
                "ares": "1.10.1-DEV",
                "modules": "46",
                "openssl": "1.0.2g"
            },
            "arch": "x64",
            "platform": "linux",
            "argv": [
                "/usr/local/lib64/node-v4.3.x/bin/node",
                "/var/runtime/node_modules/awslambda/index.js"
            ],
            "execArgv": [
                "--max-old-space-size=102",
                "--max-semi-space-size=6",
                "--max-executable-size=13",
                "--expose-gc"
            ],
            "pid": 1,
            "features": {
                "debug": false,
                "uv": true,
                "ipv6": true,
                "tls_npn": true,
                "tls_sni": true,
                "tls_ocsp": true,
                "tls": true
            },
            "execPath": "/usr/local/lib64/node-v4.3.x/bin/node",
            "debugPort": 5858,
            "config": {
                "target_defaults": {
                    "cflags": [],
                    "default_configuration": "Release",
                    "defines": [],
                    "include_dirs": [],
                    "libraries": []
                },
                "variables": {
                    "asan": 0,
                    "gas_version": "2.25",
                    "host_arch": "x64",
                    "icu_small": false,
                    "node_byteorder": "little",
                    "node_install_npm": true,
                    "node_prefix": "/home/scottwis/code/node/src/LambdaRuntimeNode/build/private/install",
                    "node_release_urlbase": "",
                    "node_shared_http_parser": false,
                    "node_shared_libuv": false,
                    "node_shared_openssl": false,
                    "node_shared_zlib": false,
                    "node_tag": "",
                    "node_use_dtrace": false,
                    "node_use_etw": false,
                    "node_use_lttng": false,
                    "node_use_openssl": true,
                    "node_use_perfctr": false,
                    "openssl_fips": "",
                    "openssl_no_asm": 0,
                    "python": "/home/scottwis/code/node/env/MakePython27Default-1.0/runtime/bin/python2.7",
                    "target_arch": "x64",
                    "uv_parent_path": "/deps/uv/",
                    "uv_use_dtrace": false,
                    "v8_enable_gdbjit": 0,
                    "v8_enable_i18n_support": 0,
                    "v8_no_strict_aliasing": 1,
                    "v8_optimized_debug": 0,
                    "v8_random_seed": 0,
                    "v8_use_snapshot": true,
                    "want_separate_host_toolset": 0
                }
            },
            "release": {
                "name": "node",
                "lts": "Argon",
                "sourceUrl": "https://nodejs.org/download/release/v4.3.2/node-v4.3.2.tar.gz",
                "headersUrl": "https://nodejs.org/download/release/v4.3.2/node-v4.3.2-headers.tar.gz"
            },
            "uptime": 1.153,
            "getuid": 482,
            "getgid": 481,
            "geteuid": 482,
            "getegid": 481,
            "memoryUsage": {
                "rss": 37896192,
                "heapTotal": 19692912,
                "heapUsed": 13039680
            }
        }
    },
    "aws": {
        "functionName": "qa-events_debug",
        "functionVersion": "8",
        "invokedFunctionArn": "arn:aws:lambda:us-east-1:554407330061:function:qa-events_debug:current",
        "memoryLimitInMB": "128",
        "awsRequestId": "01dfe372-f93d-11e6-b58d-11099a541afe",
        "logGroupName": "/aws/lambda/qa-events_debug",
        "logStreamName": "2017/02/22/[8]709e96ae58124e61b3a6e8c8666af544"
    },
    "coldstart": true,
    "errors": {},
    "custom_metrics": [],
    "time_sec_nanosec": [
        0,
        192653591
    ],
    "time_sec": 0,
    "time_nanosec": 192653591,
    "duration": 192653591,
    "client_id": "testSuite",
    "getRemainingTimeInMillis": 4805
}
