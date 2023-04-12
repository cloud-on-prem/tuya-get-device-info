Tuya Get Device Info
====================

`tuya-get-device-info` is a simple command-line tool to obtain Tuya device information, including the `local_key`.

Prerequisites
-------------

- Node.js (v14 or newer)
- `tuya-get-device-info` repository
- Tuya API access key and secret key
- Device ID of the Tuya device you want to get information for

Usage
-----

1. Set the following environment variables with the corresponding values:

- `TUYA_API_ACCESS_KEY`: Your Tuya API access key
- `TUYA_API_SECRET_KEY`: Your Tuya API secret key

You can set these environment variables using the `export` command on macOS/Linux or the `set` command on Windows. For example, on macOS/Linux:

```sh
    export TUYA_API_ACCESS_KEY=your_access_key
    export TUYA_API_SECRET_KEY=your_secret_key`
```

1. Run the `tuya-get-device-info` command with the device ID as an argument:

```sh
    npx --yes tuya-get-device-info get-local-key <DEVICE_ID>
```

Replace `<DEVICE_ID>` with your actual device ID.

This command will output the device information in JSON format. To extract the `local_key` from the output, for example, you can use a tool like `jq`:

```sh
    npx --yes tuya-get-device-info get-local-key <DEVICE_ID> | jq -r '.result.local_key'
```

This command will print the `local_key` without quotes.

Development
------------

1. Clone the `tuya-get-device-info` repository:

```sh
  git clone https://github.com/yourusername/tuya-get-device-info.git
```

1. Navigate to the `tuya-get-device-info` directory:

```sh
    cd tuya-get-device-info
```

1. Install the required dependencies:

```sh
    npm install
```
