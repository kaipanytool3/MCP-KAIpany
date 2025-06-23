import { z } from 'zod';
export type verificationV1ToolName = 'verification.v1.verification.get';
export const verificationV1VerificationGet = {
  project: 'verification',
  name: 'verification.v1.verification.get',
  sdkName: 'verification.v1.verification.get',
  path: '/open-apis/verification/v1/verification',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-Verification Information-Obtain verification information-获取认证状态',
  accessTokens: ['tenant'],
  schema: {},
};
export const verificationV1Tools = [verificationV1VerificationGet];
