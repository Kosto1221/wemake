import { getLoggedInUserId } from "~/features/users/queries";
import type { Route } from "./+types/upvote-post-page";
import { toggleUpvote } from "../mutations";
import { makeSSRClient } from "~/supa-client";

export const action = async ({ request, params }: Route.ActionArgs) => {
  if (request.method !== "POST") {
    throw new Response("Method not allowed", { status: 405 });
  }
  const { client } = await makeSSRClient(request);
  const userId = await getLoggedInUserId(client);
  await toggleUpvote(client, { postId: params.postId, userId });
  return {
    ok: true,
  };
};
