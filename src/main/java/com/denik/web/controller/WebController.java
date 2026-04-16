package com.denik.web.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class WebController {

  @GetMapping("hello/{name}")
  public String hello(@PathVariable String name) {
    log.info("Saying hello to {}", name);

    return String.format("Saying hello to %s", name);
  }

}
