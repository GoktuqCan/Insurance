package com.goktug.insurance.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goktug.insurance.model.Risk;
import com.goktug.insurance.request.RiskCalculateRequest;
import com.goktug.insurance.response.RiskCalculateResponse;

@RestController
@RequestMapping("/api/risk")
public class RiskController {

	@PostMapping("/calculate")
	public RiskCalculateResponse addBadge(@RequestBody RiskCalculateRequest request) {
		if (request.getRisks().isEmpty())
			return new RiskCalculateResponse(false, "Please provide least one module");
		List<Risk> outputs = new ArrayList<>();
		int total = 0;
		for (Risk risk : request.getRisks()) {
			switch (risk.getType()) {
			case BIKE:
				outputs.add(new Risk(risk.getType(), calculateModuleInRange(0, 3000, risk.getQuantity(), 30)));
				break;
			case JEWELRY:
				outputs.add(new Risk(risk.getType(), calculateModuleInRange(500, 10000, risk.getQuantity(), 5)));
				break;
			case ELECTRONICS:
				outputs.add(new Risk(risk.getType(), calculateModuleInRange(500, 6000, risk.getQuantity(), 35)));
				break;
			case SPORTS:
				outputs.add(new Risk(risk.getType(), calculateModuleInRange(0, 3000, risk.getQuantity(), 30)));
				break;
			}
			if (outputs.get(outputs.size() - 1).getQuantity() > 0)
				total = total + outputs.get(outputs.size() - 1).getQuantity();
		}
		return new RiskCalculateResponse(true, null, total, outputs);
	}

	private int calculateModuleInRange(int min, int max, int quantity, int percentage) {
		if (quantity >= min && quantity <= max)
			return quantity * percentage / 100;
		else if (quantity > max)
			return max * percentage / 100;
		else
			return -1;
	}

}
