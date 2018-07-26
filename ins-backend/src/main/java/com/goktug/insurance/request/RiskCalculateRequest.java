package com.goktug.insurance.request;

import java.util.ArrayList;
import java.util.List;

import com.goktug.insurance.model.Risk;

public class RiskCalculateRequest {

	List<Risk> risks = new ArrayList<>();

	public List<Risk> getRisks() {
		return risks;
	}

	public void setRisks(List<Risk> risks) {
		this.risks = risks;
	}

}
