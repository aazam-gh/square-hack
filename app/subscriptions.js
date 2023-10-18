import { databases } from "./appwrite";
import { Client, Environment } from "square";


const client = new Client({
    accessToken: "EAAAEOFwkvJtQQ9G5jq5fxiflVxvsAwXtw9PWtc27Dfv6e-Z0wpg_bmO--QWw5zK",
    environment: Environment.Sandbox,
  });

export async function getSnacks() {
    const snacks = await databases.listDocuments('652c94392548cbc325c6', '652c947007db32e2adce');    
    const tension = snacks.documents.map((snack) => 
    (
        console.log(snack['$id'],
        createCatalogs(snack['$id'], snack.Name)
    )
    ));
}

async function createCatalogs(DocumentID, Name) {  

    try {
        const response = await client.catalogApi.upsertCatalogObject({
          idempotencyKey: DocumentID,
          object: {
            type: 'ITEM',
            id: `#${DocumentID}`,
            itemData: {
              name: Name,
              variations: [
                {
                  type: 'ITEM_VARIATION',
                  id: '#base',
                  itemVariationData: {
                    itemId: `#${DocumentID}`,
                    name: Name,
                    pricingType: 'FIXED_PRICING',
                    priceMoney: {
                      amount: 20,
                      currency: 'USD'
                    }
                  }
                }
              ]
            }
          }
        });
      } catch(error) {
        console.log(error);
      }
    };


