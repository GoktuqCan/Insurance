package com.goktug.insurance.response;

import java.util.ArrayList;
import java.util.List;

import com.goktug.insurance.model.Risk;

public class RiskCalculateResponse {

	private boolean success;

	private String message;

	private int total;

	private List<Risk> outputs = new ArrayList<>();

	public RiskCalculateResponse(boolean success, String message, int total, List<Risk> outputs) {
		super();
		this.success = success;
		this.message = message;
		this.total = total;
		this.outputs = outputs;
	}

	public RiskCalculateResponse(boolean success, String message) {
		super();
		this.success = success;
		this.message = message;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public int getTotal() {
		return total;
	}

	public void setTotal(int total) {
		this.total = total;
	}

	public List<Risk> getOutputs() {
		return outputs;
	}

	public void setOutputs(List<Risk> outputs) {
		this.outputs = outputs;
	}

}
