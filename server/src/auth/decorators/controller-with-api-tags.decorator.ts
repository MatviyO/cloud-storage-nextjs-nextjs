import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function ControllerWithApiTags(routeAndTag: string): ClassDecorator {
  return (target) => {
    const capitalizedTagName = capitalizeFirstLetter(routeAndTag);
    Controller(routeAndTag)(target);
    ApiTags(capitalizedTagName)(target);
  };
}
