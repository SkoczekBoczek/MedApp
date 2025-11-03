module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/mongodb [external] (mongodb, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongodb", () => require("mongodb"));

module.exports = mod;
}),
"[project]/Desktop/WEBSITE/MedApp/app/api/plan/route.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongodb [external] (mongodb, cjs)");
;
let cachedClient = null;
let cachedDb = null;
async function connectToDatabase() {
    if (cachedClient && cachedDb) return {
        client: cachedClient,
        db: cachedDb
    };
    const client = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongodb__$5b$external$5d$__$28$mongodb$2c$__cjs$29$__["MongoClient"].connect(process.env.MONGODB_URI);
    const db = client.db("clinicDB");
    cachedClient = client;
    cachedDb = db;
    return {
        client,
        db
    };
}
async function GET(req) {
    try {
        const { db } = await connectToDatabase();
        const { searchParams } = new URL(req.url);
        const userToken = searchParams.get("token");
        const plan = await db.collection("plans").findOne({
            userToken
        });
        if (!plan) {
            return new Response(JSON.stringify({
                error: "Plan not found"
            }), {
                status: 404,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
        return new Response(JSON.stringify(plan), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({
            error: "Internal Server Error"
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
async function POST(req) {
    try {
        const { db } = await connectToDatabase();
        const plan = await req.json();
        const existingPlan = await db.collection("plans").findOne({
            userToken: plan.userToken
        });
        if (existingPlan) {
            await db.collection("plans").updateOne({
                userToken: plan.userToken
            }, {
                $set: {
                    weeklyPlan: plan.plan
                }
            });
            return new Response(JSON.stringify({
                message: "Plan updated successfully"
            }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        } else {
            await db.collection("plans").insertOne({
                userToken: plan.userToken,
                weeklyPlan: plan.plan
            });
            return new Response(JSON.stringify({
                message: "Plan created successfully"
            }), {
                status: 201,
                headers: {
                    "Content-Type": "application/json"
                }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({
            error: "Internal Server Error"
        }), {
            status: 500,
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6a90630a._.js.map