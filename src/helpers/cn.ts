import { withNaming } from "@bem-react/classname";

export const NAMESPACE = 'ui-'

export const block = withNaming({n: NAMESPACE, e: '__', m: '_'});