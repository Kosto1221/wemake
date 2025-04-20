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

  export interface ActionArgs {
    request: Request;
    params: {
      productId: string;
    };
  }

  export interface LoaderData {
    productId: string;
  }

  export interface ComponentProps {
    loaderData: LoaderData;
  }

  export type MetaArgs = ReactRouterMetaArgs;
  export type MetaFunction = ReactRouterMetaFunction;
}
