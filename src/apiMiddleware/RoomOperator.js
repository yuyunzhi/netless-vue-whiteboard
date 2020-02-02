import Fetcher from "@netless/fetch-middleware";

const sdkToken = "WHITEcGFydG5lcl9pZD0zZHlaZ1BwWUtwWVN2VDVmNGQ4UGI2M2djVGhncENIOXBBeTcmc2lnPTc1MTBkOWEwNzM1ZjA2MDYwMTMzODBkYjVlNTQ2NDA0OTAzOWU2NjE6YWRtaW5JZD0xNTgmcm9sZT1taW5pJmV4cGlyZV90aW1lPTE1OTAwNzM1NjEmYWs9M2R5WmdQcFlLcFlTdlQ1ZjRkOFBiNjNnY1RoZ3BDSDlwQXk3JmNyZWF0ZV90aW1lPTE1NTg1MTY2MDkmbm9uY2U9MTU1ODUxNjYwODYxNzAw";
const fetcher = new Fetcher(5000, "https://cloudcapiv4.herewhite.com");

export class RoomOperator {

    async createRoomApi(name, limit, mode) {
        const json = await fetcher.post({
            path: `room`,
            query: {
                token: sdkToken,
            },
            body: {
                name: name,
                limit: limit,
                mode: mode,
            },
        });
        return json;
    }

    async joinRoomApi(uuid) {
        const json = await fetcher.post({
            path: `room/join`,
            query: {
                uuid: uuid,
                token: sdkToken,
            },
        });
        return json;
    }

    async staticConversionApi(sourceUrl, targetBucket, targetFolder) {
        const json = await fetcher.post({
            path: `services/static-conversion/tasks`,
            query: {
                token: sdkToken,
            },
            body: {
                sourceUrl: sourceUrl,
                targetBucket: targetBucket,
                targetFolder: targetFolder,
            },
        });
        return json;
    }
}
