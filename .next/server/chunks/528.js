"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 37305:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;
/**
 * Hoists a name from a module or promised module.
 *
 * @param module the module to hoist the name from
 * @param name the name to hoist
 * @returns the value on the module (or promised module)
 */ 
__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "l", ({
    enumerable: true,
    get: function() {
        return hoist;
    }
}));
function hoist(module, name) {
    // If the name is available in the module, return it.
    if (name in module) {
        return module[name];
    }
    // If a property called `then` exists, assume it's a promise and
    // return a promise that resolves to the name.
    if ("then" in module && typeof module.then === "function") {
        return module.then((mod)=>hoist(mod, name));
    }
    // If we're trying to hoise the default export, and the module is a function,
    // return the module itself.
    if (typeof module === "function" && name === "default") {
        return module;
    }
    // Otherwise, return undefined.
    return undefined;
}

//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ 47153:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "x", ({
    enumerable: true,
    get: function() {
        return RouteKind;
    }
}));
var RouteKind;
(function(RouteKind) {
    RouteKind[/**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ "PAGES"] = "PAGES";
    RouteKind[/**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ "PAGES_API"] = "PAGES_API";
    RouteKind[/**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ "APP_PAGE"] = "APP_PAGE";
    RouteKind[/**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ "APP_ROUTE"] = "APP_ROUTE";
})(RouteKind || (RouteKind = {}));

//# sourceMappingURL=route-kind.js.map

/***/ }),

/***/ 56429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    PagesAPIRouteModule: function() {
        return PagesAPIRouteModule;
    },
    default: function() {
        return _default;
    }
});
const _routemodule = __webpack_require__(43076);
const _node = __webpack_require__(90730);
class PagesAPIRouteModule extends _routemodule.RouteModule {
    /**
   *
   * @param req the incoming server request
   * @param res the outgoing server response
   * @param context the context for the render
   */ async render(req, res, context) {
        await (0, _node.apiResolver)(req, res, context.query, this.userland, {
            ...context.previewProps,
            revalidate: context.revalidate,
            trustHostHeader: context.trustHostHeader,
            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,
            hostname: context.hostname
        }, context.minimalMode, context.dev, context.page);
    }
}
const _default = PagesAPIRouteModule;

//# sourceMappingURL=module.js.map

/***/ }),

/***/ 98615:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E1: () => (/* binding */ FirestoreAdapter)
/* harmony export */ });
/* unused harmony exports mapFieldsFactory, getOneDoc, getDoc, collectionsFactory, initFirestore */
/* harmony import */ var firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60325);
/* harmony import */ var firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12594);
/**
 * <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", padding: 16}}>
 * <span>
 *  Official <b>Firebase</b> adapter for Auth.js / NextAuth.js,
 *  using the <a href="https://firebase.google.com/docs/admin/setup">Firebase Admin SDK</a>
 *  &nbsp;and <a href="https://firebase.google.com/docs/firestore">Firestore</a>.</span>
 * <a href="https://firebase.google.com/">
 *   <img style={{display: "block"}} src="https://authjs.dev/img/adapters/firebase.svg" height="48" width="48"/>
 * </a>
 * </div>
 *
 * ## Installation
 *
 * ```bash npm2yarn2pnpm
 * npm install @auth/firebase-adapter firebase-admin
 * ```
 *
 * @module @auth/firebase-adapter
 */


/**
 * ## Setup
 *
 * First, create a Firebase project and generate a service account key. Visit: `https://console.firebase.google.com/u/0/project/{project-id}/settings/serviceaccounts/adminsdk` (replace `{project-id}` with your project's id)
 *
 * Now you have a few options to authenticate with the Firebase Admin SDK in your app:
 *
 * ### Environment variables
 *  - Download the service account key and save it in your project. (Make sure to add the file to your `.gitignore`!)
 *  - Add [`GOOGLE_APPLICATION_CREDENTIALS`](https://cloud.google.com/docs/authentication/application-default-credentials#GAC) to your environment variables and point it to the service account key file.
 *  - The adapter will automatically pick up the environment variable and use it to authenticate with the Firebase Admin SDK.
 *
 * @example
 * ```ts title="pages/api/auth/[...nextauth].ts"
 * import NextAuth from "next-auth"
 * import { FirestoreAdapter } from "@auth/firebase-adapter"
 *
 * export default NextAuth({
 *   adapter: FirestoreAdapter(),
 *   // ...
 * })
 * ```
 *
 * ### Service account values
 *
 * - Download the service account key to a temporary location. (Make sure to not commit this file to your repository!)
 * - Add the following environment variables to your project: `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`.
 * - Pass the config to the adapter, using the environment variables as shown in the example below.
 *
 * @example
 * ```ts title="pages/api/auth/[...nextauth].ts"
 * import NextAuth from "next-auth"
 * import { FirestoreAdapter } from "@auth/firebase-adapter"
 * import { cert } from "firebase-admin/app"
 *
 * export default NextAuth({
 *  adapter: FirestoreAdapter({
 *    credential: cert({
 *      projectId: process.env.FIREBASE_PROJECT_ID,
 *      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
 *      privateKey: process.env.FIREBASE_PRIVATE_KEY,
 *    })
 *  })
 *  // ...
 * })
 * ```
 *
 * ### Using an existing Firestore instance
 *
 * If you already have a Firestore instance, you can pass that to the adapter directly instead.
 *
 * :::note
 * When passing an instance and in a serverless environment, remember to handle duplicate app initialization.
 * :::
 *
 * :::tip
 * You can use the {@link initFirestore} utility to initialize the app and get an instance safely.
 * :::
 *
 * @example
 * ```ts title="pages/api/auth/[...nextauth].ts"
 * import NextAuth from "next-auth"
 * import { FirestoreAdapter } from "@auth/firebase-adapter"
 * import { firestore } from "lib/firestore"
 *
 * export default NextAuth({
 *  adapter: FirestoreAdapter(firestore),
 *  // ...
 * })
 * ```
 */
function FirestoreAdapter(config) {
    const { db, namingStrategy = "default" } = config instanceof firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_1__.Firestore
        ? { db: config }
        : { ...config, db: config?.firestore ?? initFirestore(config) };
    const preferSnakeCase = namingStrategy === "snake_case";
    const C = collectionsFactory(db, preferSnakeCase);
    const mapper = mapFieldsFactory(preferSnakeCase);
    return {
        async createUser(userInit) {
            const { id: userId } = await C.users.add(userInit);
            const user = await getDoc(C.users.doc(userId));
            if (!user)
                throw new Error("[createUser] Failed to fetch created user");
            return user;
        },
        async getUser(id) {
            return await getDoc(C.users.doc(id));
        },
        async getUserByEmail(email) {
            return await getOneDoc(C.users.where("email", "==", email));
        },
        async getUserByAccount({ provider, providerAccountId }) {
            const account = await getOneDoc(C.accounts
                .where("provider", "==", provider)
                .where(mapper.toDb("providerAccountId"), "==", providerAccountId));
            if (!account)
                return null;
            return await getDoc(C.users.doc(account.userId));
        },
        async updateUser(partialUser) {
            if (!partialUser.id)
                throw new Error("[updateUser] Missing id");
            const userRef = C.users.doc(partialUser.id);
            await userRef.set(partialUser, { merge: true });
            const user = await getDoc(userRef);
            if (!user)
                throw new Error("[updateUser] Failed to fetch updated user");
            return user;
        },
        async deleteUser(userId) {
            await db.runTransaction(async (transaction) => {
                const accounts = await C.accounts
                    .where(mapper.toDb("userId"), "==", userId)
                    .get();
                const sessions = await C.sessions
                    .where(mapper.toDb("userId"), "==", userId)
                    .get();
                transaction.delete(C.users.doc(userId));
                accounts.forEach((account) => transaction.delete(account.ref));
                sessions.forEach((session) => transaction.delete(session.ref));
            });
        },
        async linkAccount(accountInit) {
            const ref = await C.accounts.add(accountInit);
            const account = await ref.get().then((doc) => doc.data());
            return account ?? null;
        },
        async unlinkAccount({ provider, providerAccountId }) {
            await deleteDocs(C.accounts
                .where("provider", "==", provider)
                .where(mapper.toDb("providerAccountId"), "==", providerAccountId)
                .limit(1));
        },
        async createSession(sessionInit) {
            const ref = await C.sessions.add(sessionInit);
            const session = await ref.get().then((doc) => doc.data());
            if (session)
                return session ?? null;
            throw new Error("[createSession] Failed to fetch created session");
        },
        async getSessionAndUser(sessionToken) {
            const session = await getOneDoc(C.sessions.where(mapper.toDb("sessionToken"), "==", sessionToken));
            if (!session)
                return null;
            const user = await getDoc(C.users.doc(session.userId));
            if (!user)
                return null;
            return { session, user };
        },
        async updateSession(partialSession) {
            const sessionId = await db.runTransaction(async (transaction) => {
                const sessionSnapshot = (await transaction.get(C.sessions
                    .where(mapper.toDb("sessionToken"), "==", partialSession.sessionToken)
                    .limit(1))).docs[0];
                if (!sessionSnapshot?.exists)
                    return null;
                transaction.set(sessionSnapshot.ref, partialSession, { merge: true });
                return sessionSnapshot.id;
            });
            if (!sessionId)
                return null;
            const session = await getDoc(C.sessions.doc(sessionId));
            if (session)
                return session;
            throw new Error("[updateSession] Failed to fetch updated session");
        },
        async deleteSession(sessionToken) {
            await deleteDocs(C.sessions
                .where(mapper.toDb("sessionToken"), "==", sessionToken)
                .limit(1));
        },
        async createVerificationToken(verificationToken) {
            await C.verification_tokens.add(verificationToken);
            return verificationToken;
        },
        async useVerificationToken({ identifier, token }) {
            const verificationTokenSnapshot = (await C.verification_tokens
                .where("identifier", "==", identifier)
                .where("token", "==", token)
                .limit(1)
                .get()).docs[0];
            if (!verificationTokenSnapshot)
                return null;
            const data = verificationTokenSnapshot.data();
            await verificationTokenSnapshot.ref.delete();
            return data;
        },
    };
}
// for consistency, store all fields as snake_case in the database
const MAP_TO_FIRESTORE = {
    userId: "user_id",
    sessionToken: "session_token",
    providerAccountId: "provider_account_id",
    emailVerified: "email_verified",
};
const MAP_FROM_FIRESTORE = {};
for (const key in MAP_TO_FIRESTORE) {
    MAP_FROM_FIRESTORE[MAP_TO_FIRESTORE[key]] = key;
}
const identity = (x) => x;
/** @internal */
function mapFieldsFactory(preferSnakeCase) {
    if (preferSnakeCase) {
        return {
            toDb: (field) => MAP_TO_FIRESTORE[field] ?? field,
            fromDb: (field) => MAP_FROM_FIRESTORE[field] ?? field,
        };
    }
    return { toDb: identity, fromDb: identity };
}
/** @internal */
function getConverter(options) {
    const mapper = mapFieldsFactory(options?.preferSnakeCase ?? false);
    return {
        toFirestore(object) {
            const document = {};
            for (const key in object) {
                if (key === "id")
                    continue;
                const value = object[key];
                if (value !== undefined) {
                    document[mapper.toDb(key)] = value;
                }
                else {
                    console.warn(`FirebaseAdapter: value for key "${key}" is undefined`);
                }
            }
            return document;
        },
        fromFirestore(snapshot) {
            const document = snapshot.data(); // we can guarantee it exists
            const object = {};
            if (!options?.excludeId) {
                object.id = snapshot.id;
            }
            for (const key in document) {
                let value = document[key];
                if (value instanceof firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp)
                    value = value.toDate();
                object[mapper.fromDb(key)] = value;
            }
            return object;
        },
    };
}
/** @internal */
async function getOneDoc(querySnapshot) {
    const querySnap = await querySnapshot.limit(1).get();
    return querySnap.docs[0]?.data() ?? null;
}
/** @internal */
async function deleteDocs(querySnapshot) {
    const querySnap = await querySnapshot.get();
    for (const doc of querySnap.docs) {
        await doc.ref.delete();
    }
}
/** @internal */
async function getDoc(docRef) {
    const docSnap = await docRef.get();
    return docSnap.data() ?? null;
}
/** @internal */
function collectionsFactory(db, preferSnakeCase = false) {
    return {
        users: db
            .collection("users")
            .withConverter(getConverter({ preferSnakeCase })),
        sessions: db
            .collection("sessions")
            .withConverter(getConverter({ preferSnakeCase })),
        accounts: db
            .collection("accounts")
            .withConverter(getConverter({ preferSnakeCase })),
        verification_tokens: db
            .collection(preferSnakeCase ? "verification_tokens" : "verificationTokens")
            .withConverter(getConverter({ preferSnakeCase, excludeId: true })),
    };
}
/**
 * Utility function that helps making sure that there is no duplicate app initialization issues in serverless environments.
 * If no parameter is passed, it will use the `GOOGLE_APPLICATION_CREDENTIALS` environment variable to initialize a Firestore instance.
 *
 * @example
 * ```ts title="lib/firestore.ts"
 * import { initFirestore } from "@auth/firebase-adapter"
 * import { cert } from "firebase-admin/app"
 *
 * export const firestore = initFirestore({
 *  credential: cert({
 *    projectId: process.env.FIREBASE_PROJECT_ID,
 *    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
 *    privateKey: process.env.FIREBASE_PRIVATE_KEY,
 *  })
 * })
 * ```
 */
function initFirestore(options = {}) {
    const apps = (0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.getApps)();
    const app = options.name ? apps.find((a) => a.name === options.name) : apps[0];
    if (app)
        return (0,firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);
    return (0,firebase_admin_firestore__WEBPACK_IMPORTED_MODULE_1__.initializeFirestore)((0,firebase_admin_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(options, options.name));
}


/***/ })

};
;