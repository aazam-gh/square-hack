import { Client, Environment } from "square";


const client = new Client({
    accessToken: "EAAAEOFwkvJtQQ9G5jq5fxiflVxvsAwXtw9PWtc27Dfv6e-Z0wpg_bmO--QWw5zK",
    environment: Environment.Sandbox,
  });

  
export async function subscriptionPlans(){

    try {
        const response = await client.catalogApi.upsertCatalogObject({
            idempotencyKey: '23aea954-c1b4-4e31-9bde-11925757b9e4',
            object: {
                type: 'SUBSCRIPTION_PLAN',
                id: '#1',
                subscriptionPlanData: {
                    name: 'Shankarpali Subscription',
                    eligibleItemIds: [
                        'AEHOYB3I4SBGUM3O3VIAY27I'
                    ],
                    allItems: false
                }
            }
        });
        
        console.log(response.result);
    } catch(error) {
        console.log(error);
    }
}