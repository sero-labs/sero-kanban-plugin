/**
 * Kanban transition validation — canonical shared exports.
 *
 * The source of truth now lives in `@sero-ai/common` so the host and plugin
 * consume the same state model and validation helpers.
 */

export type { ValidationResult } from '@sero-ai/common';

export {
  validateCardTransition,
  validateReviewDecision,
  getUnmetDependencies,
  getManualMoveTargets,
  validateManualMove,
} from '@sero-ai/common';
