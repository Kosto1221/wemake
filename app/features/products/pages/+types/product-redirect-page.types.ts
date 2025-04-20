import type {
  MetaFunction as ReactRouterMetaFunction,
  MetaArgs as ReactRouterMetaArgs,
} from "react-router";

export namespace Route {
  export interface LoaderArgs {
    params: {
      productId: string;
    };
  }

  export type MetaArgs = ReactRouterMetaArgs;
  export type MetaFunction = ReactRouterMetaFunction;
}
