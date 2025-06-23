import { z } from 'zod';
export type cardkitV1ToolName =
  | 'cardkit.v1.card.batchUpdate'
  | 'cardkit.v1.card.create'
  | 'cardkit.v1.cardElement.content'
  | 'cardkit.v1.cardElement.create'
  | 'cardkit.v1.cardElement.delete'
  | 'cardkit.v1.cardElement.patch'
  | 'cardkit.v1.cardElement.update'
  | 'cardkit.v1.card.idConvert'
  | 'cardkit.v1.card.settings'
  | 'cardkit.v1.card.update';
export const cardkitV1CardBatchUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.batchUpdate',
  sdkName: 'cardkit.v1.card.batchUpdate',
  path: '/open-apis/cardkit/v1/cards/:card_id/batch_update',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-Feishu Card-Card-Batch update card entity-Batch update card',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z
        .string()
        .describe(
          'Idempotent ID, which can be passed in a unique UUID to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          "When the card is in streaming update mode, operate the serial number of the card. It is used to ensure the timing of multiple updates. The value of this serial number should be a positive integer, customized by the developer, and timestamp is recommended.** Attention**:If you update the card multiple times during the single stream update of the card, you need to ensure that the'sequence 'is incremented one by one, otherwise an error will be reported",
        ),
      actions: z
        .string()
        .describe(
          "List of operations, optional values are:- 'partial_update_setting': Update card configuration, support updating card config and card_link fields. For parameter structure, please refer to ;- 'add_elements': Add components, support type, target_element_id, elements fields. The parameter structure can refer to the  interface request body;- delete_elements: Delete the component, support element_ids fields. The parameter value is the component ID array. The parameter structure can refer to ;- 'partial_update_element': Update the properties of the component, support element_id and partial_element fields. The parameter structure can refer to the path parameters of the  interface element_id and request body partial_element fields;- update_element: full update component, support element_id and element fields. The parameter structure can refer to the path parameter element_id and request body element field of the  interface",
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
    }),
  },
};
export const cardkitV1CardCreate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.create',
  sdkName: 'cardkit.v1.card.create',
  path: '/open-apis/cardkit/v1/cards',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-Feishu Card-Card-Create card entity-Create a card entity based on the card JSON code',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      type: z.string().describe('Type of card data. Take the fixed value `card_json`'),
      data: z
        .string()
        .describe(
          'The contents of the card JSON data. Only  is supported, i.e. you must declare the schema as 2.0. The following example values are not escaped, please be careful to convert them to JSON serialized strings when using them',
        ),
    }),
  },
};
export const cardkitV1CardElementContent = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.content',
  sdkName: 'cardkit.v1.cardElement.content',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-Feishu Card-Element-Stream update text-Stream Updating Text',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z
        .string()
        .describe(
          'Idempotent IDs, which can be passed a unique uuid to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      content: z.string().describe('Updated text content'),
      sequence: z
        .number()
        .describe(
          'Sequence number, used to ensure the timing of updating text content. During the single streaming mode cycle of the card (steaming state from start to stop), this value needs to be an increasing positive integer, otherwise an error will be reported',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
      element_id: z.string().describe('Component ID'),
    }),
  },
};
export const cardkitV1CardElementCreate = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.create',
  sdkName: 'cardkit.v1.cardElement.create',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-Feishu Card-Element-Insert element-Insert Element',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      type: z
        .enum(['insert_before', 'insert_after', 'append'])
        .describe(
          'How to add components Options:insert_before(Insert in front of the target component),insert_after(Insert after target component),append(Add at the end of a card or container component)',
        ),
      target_element_id: z
        .string()
        .describe(
          'The ID of the target component. When type is insert_before, insert_after, it is the target component used for positioning. When type is append, this field only supports container class components. It is the target component added at the end of the specified end. If it is not filled in, it is added at the end of the card body by default',
        )
        .optional(),
      uuid: z
        .string()
        .describe(
          'Idempotent IDs, which can be passed a unique uuid to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          'When the card is in streaming update mode, the sequence number of the card operation is used to ensure the timing of multiple updates. The value is a positive integer, and multiple updates of a streaming state (streaming_mode a period from true to false) need to ensure that the sequence is incremented, otherwise an error will be reported. Timestamp is recommended',
        ),
      elements: z.string().describe('Component List'),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
    }),
  },
};
export const cardkitV1CardElementDelete = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.delete',
  sdkName: 'cardkit.v1.cardElement.delete',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-Feishu Card-Element-Delete element-Delete Element',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z
        .string()
        .describe(
          'Idempotent IDs, which can be passed a unique uuid to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          'When the card is in streaming update mode, the sequence number of the card operation is used to ensure the timing of multiple updates. The value is a positive integer, and multiple updates of a streaming state (streaming_mode a period from true to false) need to ensure that the sequence is incremented, otherwise an error will be reported. Timestamp is recommended',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
      element_id: z.string().describe('Component ID'),
    }),
  },
};
export const cardkitV1CardElementPatch = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.patch',
  sdkName: 'cardkit.v1.cardElement.patch',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-Feishu Card-Element-Patch Update Element-Update Element Attribute',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      partial_element: z
        .string()
        .describe(
          'The configuration content of the component part to be changed will be updated after passing the id parameter to the original component. Modifying the tag parameter is not supported',
        ),
      uuid: z
        .string()
        .describe(
          'Idempotent IDs, which can be passed a unique uuid to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          'When the card is in streaming update mode, the sequence number of the card operation is used to ensure the timing of multiple updates. The value is a positive integer, and multiple updates of a streaming state (streaming_mode a period from true to false) need to ensure that the sequence is incremented, otherwise an error will be reported. Timestamp is recommended',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
      element_id: z.string().describe('Component ID'),
    }),
  },
};
export const cardkitV1CardElementUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.update',
  sdkName: 'cardkit.v1.cardElement.update',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-Feishu Card-Element-Update element-Update Element',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z
        .string()
        .describe(
          'Idempotent IDs, which can be passed a unique uuid to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      element: z.string().describe('new component'),
      sequence: z
        .number()
        .describe(
          'When the card is in streaming update mode, the sequence number of the card operation is used to ensure the timing of multiple updates. The value is a positive integer, and multiple updates of a streaming state (streaming_mode a period from true to false) need to ensure that the sequence is incremented, otherwise an error will be reported. Timestamp is recommended',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
      element_id: z.string().describe('Component ID'),
    }),
  },
};
export const cardkitV1CardIdConvert = {
  project: 'cardkit',
  name: 'cardkit.v1.card.idConvert',
  sdkName: 'cardkit.v1.card.idConvert',
  path: '/open-apis/cardkit/v1/cards/id_convert',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-Deprecated Version (Not Recommended)-Convert ID-ID Convert',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      message_id: z
        .string()
        .describe(
          'Message ID. Get via ',
        ),
    }),
  },
};
export const cardkitV1CardSettings = {
  project: 'cardkit',
  name: 'cardkit.v1.card.settings',
  sdkName: 'cardkit.v1.card.settings',
  path: '/open-apis/cardkit/v1/cards/:card_id/settings',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-Feishu Card-Card-Update card config-Updates the configuration of a given card entity, supporting updates to the config and card_link fields',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      settings: z
        .string()
        .describe(
          "Card configuration related fields, including'config 'and 'card_link' fields. The following example values are not escaped, please be careful to convert them to JSON serialized strings when using them. For detailed field descriptions, refer to ",
        ),
      uuid: z
        .string()
        .describe(
          'Idempotent ID, which can be passed in a unique UUID to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          "When the card is in streaming update mode, operate the serial number of the card. Used to ensure the timing of multiple updates. The value of this serial number should be a positive integer, customized by the developer.**Attention**:If you update the card multiple times during the single stream update of the card, you need to ensure that the'sequence 'is incremented one by one, otherwise an error code of 300317 will be reported",
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
    }),
  },
};
export const cardkitV1CardUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.update',
  sdkName: 'cardkit.v1.card.update',
  path: '/open-apis/cardkit/v1/cards/:card_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-Feishu Card-Card-Update card entity-Update card entity',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      card: z
        .object({
          type: z
            .literal('card_json')
            .describe('Type of card data. Take the fixed value card_json. Options:card_json(Card JSON)'),
          data: z
            .string()
            .describe(
              'The content of the card JSON data. Only card structures in schema 2.0 are supported. The following example values are not escaped. Please be careful to convert them to JSON serialized strings when using them',
            ),
        })
        .describe('Updated card content'),
      uuid: z
        .string()
        .describe(
          'Idempotent ID, which can be passed in a unique UUID to ensure that the same batch of operations is performed only once',
        )
        .optional(),
      sequence: z
        .number()
        .describe(
          "When the card is in streaming update mode, operate the serial number of the card. It is used to ensure the timing of multiple updates. The value of this serial number should be a positive integer, customized by the developer, and timestamp is recommended.**Attention**:If you update the card multiple times during the single stream update of the card, you need to ensure that the'sequence 'is incremented one by one, otherwise an error will be reported",
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe(
          'Card entity ID. Get it by ',
        ),
    }),
  },
};
export const cardkitV1Tools = [
  cardkitV1CardBatchUpdate,
  cardkitV1CardCreate,
  cardkitV1CardElementContent,
  cardkitV1CardElementCreate,
  cardkitV1CardElementDelete,
  cardkitV1CardElementPatch,
  cardkitV1CardElementUpdate,
  cardkitV1CardIdConvert,
  cardkitV1CardSettings,
  cardkitV1CardUpdate,
];
