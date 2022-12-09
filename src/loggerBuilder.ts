import { makeLogger } from '@ripplescience/fhir-works-on-aws-interface';

const componentLogger = makeLogger({
    component: 'persistence',
});

export default function getComponentLogger(): any {
    return componentLogger;
}
