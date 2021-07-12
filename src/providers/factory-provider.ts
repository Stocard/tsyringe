import ContextAwareFactoryFunction from "../factories/context-aware-factory-function";
import Provider from "./provider";

/**
 * Provide a dependency using a factory.
 * Unlike the other providers, this does not support instance caching. If
 * you need instance caching, your factory method must implement it.
 */
export default interface FactoryProvider<T> {
  useFactory: ContextAwareFactoryFunction<T>;
}

export function isFactoryProvider<T>(
  provider: Provider<T>
): provider is FactoryProvider<any> {
  return !!(provider as FactoryProvider<T>).useFactory;
}
