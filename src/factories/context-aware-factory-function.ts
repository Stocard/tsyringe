import DependencyContainer from "../types/dependency-container";
import ResolutionContext from "../resolution-context";

type ContextAwareFactoryFunction<T> = (
  dependencyContainer: DependencyContainer,
  context: ResolutionContext
) => T;

export default ContextAwareFactoryFunction;
