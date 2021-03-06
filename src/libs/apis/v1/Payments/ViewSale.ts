/**
 *  Copyright 2018 Angus.Fenying <fenying@litert.org>
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import * as VerCom from "../Common";
import * as Payments from "./Common";

export class Command
extends VerCom.AbstractCommand<Payments.ISaleInfo> {

    private _id: string;

    public constructor(
        id: string
    ) {

        super();

        this._id = id;
    }

    public getPath(): string {

        return `/v1/payments/sale/${this._id}/`;
    }

    public getBody(): null {

        return null;
    }

    public getMethod(): "GET" {

        return "GET";
    }

    public parseResponse(
        code: number,
        headers: Record<string, string | string[]>,
        body: string
    ): Payments.ISaleInfo {

        return JSON.parse(body);
    }
}
